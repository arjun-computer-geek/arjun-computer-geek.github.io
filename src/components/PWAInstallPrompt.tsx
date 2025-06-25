import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Download, X, Smartphone } from 'lucide-react';

interface BeforeInstallPromptEvent extends Event {
    readonly platforms: string[];
    readonly userChoice: Promise<{
        outcome: 'accepted' | 'dismissed';
        platform: string;
    }>;
    prompt(): Promise<void>;
}

interface NavigatorStandalone extends Navigator {
    standalone?: boolean;
}

export function PWAInstallPrompt() {
    const [deferredPrompt, setDeferredPrompt] = useState<BeforeInstallPromptEvent | null>(null);
    const [showPrompt, setShowPrompt] = useState(false);
    const [isInstalled, setIsInstalled] = useState(false);

    useEffect(() => {
        // Check if app is already installed
        if (window.matchMedia('(display-mode: standalone)').matches ||
            (window.navigator as NavigatorStandalone).standalone === true) {
            setIsInstalled(true);
            return;
        }

        const handleBeforeInstallPrompt = (e: Event) => {
            e.preventDefault();
            setDeferredPrompt(e as BeforeInstallPromptEvent);
            setShowPrompt(true);
        };

        const handleAppInstalled = () => {
            setIsInstalled(true);
            setShowPrompt(false);
            setDeferredPrompt(null);
        };

        window.addEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
        window.addEventListener('appinstalled', handleAppInstalled);

        return () => {
            window.removeEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
            window.removeEventListener('appinstalled', handleAppInstalled);
        };
    }, []);

    const handleInstall = async () => {
        if (!deferredPrompt) return;

        deferredPrompt.prompt();
        const { outcome } = await deferredPrompt.userChoice;

        if (outcome === 'accepted') {
            setIsInstalled(true);
        }

        setDeferredPrompt(null);
        setShowPrompt(false);
    };

    const handleDismiss = () => {
        setShowPrompt(false);
        setDeferredPrompt(null);
    };

    if (isInstalled || !showPrompt) {
        return null;
    }

    return (
        <div className="fixed bottom-4 left-4 z-50">
            <Card className="w-80 shadow-lg border-2">
                <CardHeader className="pb-3">
                    <div className="flex items-center justify-between">
                        <CardTitle className="text-sm font-semibold flex items-center">
                            <Smartphone className="w-4 h-4 mr-2" />
                            Install App
                        </CardTitle>
                        <Button
                            variant="ghost"
                            size="sm"
                            onClick={handleDismiss}
                            className="h-6 w-6 p-0"
                        >
                            <X className="w-3 h-3" />
                        </Button>
                    </div>
                    <CardDescription className="text-xs">
                        Install this app on your device for quick and easy access when you're on the go.
                    </CardDescription>
                </CardHeader>
                <CardContent className="pt-0">
                    <div className="flex gap-2">
                        <Button
                            onClick={handleInstall}
                            size="sm"
                            className="flex-1"
                        >
                            <Download className="w-4 h-4 mr-2" />
                            Install
                        </Button>
                        <Button
                            onClick={handleDismiss}
                            size="sm"
                            variant="outline"
                            className="flex-1"
                        >
                            Later
                        </Button>
                    </div>
                </CardContent>
            </Card>
        </div>
    );
} 