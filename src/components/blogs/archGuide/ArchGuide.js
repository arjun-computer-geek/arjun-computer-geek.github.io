import React from 'react'
import MetaData from '../../layout/MetaData'
import './ArchGuide.css'
import { Link } from 'react-router-dom'
import Code from './../../layout/Code';

const ArchGuide = () => {
    return (
        <>
            <MetaData title={'Arch Installation'} />
            <section className="blogs" style={{ body: 'white' }}>
                <div className="arch_blog">
                    <h1>How to install Arch Linux along with Winodws10 (Dual Boot)</h1>
                    <img className="thumbnail" src="/img/arch_thumbnail.png" alt="arch_thumbnail" />
                    <h3>Arjun Kumar </h3>
                    <span>July, 2021</span>
                    <br />
                    <br />
                    <br />
                    <p>
                        <b><Link to={{ pathname: "https://archlinux.org/" }} target="_blank">Arch Linux </Link></b>
                        is a lightweight and flexible linux distribution. It works on KISS(Keep it Simple & Stupid) Principal and rolling release.
                    </p>
                    <br />
                    <br />
                    <p>
                        Hey! Here We are going to install arch linux along with windows 10 with dual boot. A step by step guide. Please follow all the steps carefully & read instructions before run any commands otherwise it can harm your system or You may loose all your data. 🙏
                    </p>
                    <br />
                    <br />
                    <p className="warning">
                        <strong><code>Warning!</code></strong>
                        In this methods we will do wipe or formate disk. If any mistake happed then you will loose your all data so Please before follow these steps backup your data. 🙏🙏
                    </p>
                    <br />
                    <br />
                    <p className="info">
                        <strong>Requirements for installing Arch Linux</strong><br />
                        – A x86_64 (i.e. 64 bit) compatible machine<br />
                        – Minimum 512 MB of RAM (recommended 2 GB)<br />
                        – At least 2 GB of free disk space (recommended 20 GB <br />
                        &nbsp;&nbsp;&nbsp;for basic usage with a desktop environment)<br />
                        – An active internet connection<br />
                        – A USB drive with minimum 2 GB of storage capacity<br />
                        – Familiarity with Linux command line<br />
                    </p>
                    <br />
                    <br />
                    <br />
                    <br />
                    <h2>Step 1 : Download the Arch Linux Iso</h2>
                    <br />
                    <p>
                        Download the ISO from the <Link to={{ pathname: "https://archlinux.org/download/" }} target="_blank"> Arch Linux download page</Link>. You can download <i>directly via link</i> or via <i>Bitorrent</i>.
                    </p>
                    <br />
                    <h2>Step 2 : Create a live USB</h2>
                    <br />
                    <p>To create a live usb the easiest method is to create via rufus software. <br /> <b style={{ textAlign: 'center' }}>or</b>
                        <p> For more methods you can check <Link to={{ pathname: "https://wiki.archlinux.org/title/USB_flash_installation_medium" }} target="_blank"> USB installation medium page.</Link> </p>
                    </p>
                    <br />
                    <div>
                        <p>
                            <strong>Creating Bootable Device via rufus : </strong>
                            <br />
                            &nbsp; - First of all You need a USB drive which is empty.
                            <br />
                            &nbsp; - Download <Link to={{ pathname: "https://rufus.ie/en_US/" }} target="_blank">Rufus.</Link>
                            <br />
                            &nbsp; - Run downloaded exe. Then You will see something like this. 👇👇👇
                            <br />
                            &nbsp; - Then Click Start.
                            <br />
                            <br />
                            <img style={{ width: '100%', borderRadius: '10px' }} src="/img/rufus_img.JPG" alt={`installation-img`} />
                            <br />
                            <br />
                        </p>
                        <p className="note">
                            <strong>Note : </strong>
                            <br />
                            &nbsp; - Please Check Partition Scheme to GPT.
                            <br />
                            &nbsp; - Please Check Target System to UEFI.
                        </p>
                        <br />
                        <br />
                        <p>
                            <h2>Step 3 : Create a Partition for Linux</h2>
                        </p>
                        <br />
                        <p>
                            To create a partition :
                            <br />
                            &nbsp; - Right Click on "My Computer/This PC &gt; manage &gt; Disk Management" .

                            <br />
                            &nbsp; - Right Click that partition which you want to give for linux.

                            <br />
                            &nbsp; - Click on "Shrink Volume".

                            <br />
                            &nbsp; - Give the perticula space to that drive and click <b>Shrink</b>.
                            <br />
                            It will look like something like this.👇👇👇
                            <br />
                            <br />
                            <img style={{ width: '100%', borderRadius: '10px' }} src="/img/add_partition.JPG" alt={`partition-img`} />
                        </p>
                        <br />
                        <br />
                        <p>
                            <h2>Step 4 : Restart and Reboot to the Arch Linux</h2>
                        </p>
                        <br />
                        <p>
                            Restart the windows system. Boot from the live usb which we have created.
                        </p>
                        <p className="note">
                            <strong>Note : </strong>
                            <br />
                            &nbsp; - Please ensure the secure boot is disable.
                            <br />
                            &nbsp; - Please Boot System to UEFI.
                        </p>
                        <br />
                        <br />
                        <p>
                            <h2>Step 5 : Let's begin the installation</h2>
                        </p>
                        <br />
                        <p>
                            On the bootup scree, you will be presented with options as shown below. Select the first option - Arch Linux Install medium (x89_64, UEFI) and hit ENTER.
                            <br />
                            <br />
                            <img style={{ width: '100%', borderRadius: '10px' }} src="/img/slelect_option.webp" alt={`select-option-img`} />
                            <br />
                            <br />
                            This initialize Arch Linux as evidenced by the boot messages on the screen.
                            <br />
                            <br />
                            <img style={{ width: '100%', borderRadius: '10px' }} src="/img/booot_message.webp" alt={`boot-msg-img`} />
                            <br />
                            <br />
                            After a few seconds, this ushers you to the prompt as shown below.
                            <br />
                            <br />
                            <img style={{ width: '100%', borderRadius: '10px' }} src="/img/initial_view.webp" alt={`initial-view-img`} />
                            <br />
                            <br />
                            To confirm that you have EFI support, run the command:
                            <Code code={`# ls /sys/firmware/efi/efivars`} />
                            You should get some entries on the screen as shown. If nothing is listed on your screen, then it means you are using MBR and this guide won’t work for you in configuring up a dual boot setup.
                            <br />
                            <br />
                            <img style={{ width: '100%', borderRadius: '10px' }} src="/img/verify_efi.webp" alt={`verify-efi-img`} />
                            <br />
                            <br />
                            <p>
                                <h2>Step 5 : Connect to the internet</h2>
                            </p>
                            <br />
                            <p>
                                As you begin the installation, you might want to ensure that you have internet connectivity. Internet connectivity is crucial in setting time and date.
                                <br />
                                To connect to the internet please type follow command:
                                <br />
                                <br />
                                To get an interactive prompt do:
                                <Code code={`$ iwctl`} />
                                First, if you do not know your wireless device name, list all Wi-Fi devices:
                                <Code code={`[iwd]# device list`} />
                                Then, to scan for networks:
                                <Code code={`[iwd]# station device scan`} />
                                You can then list all available networks:
                                <Code code={`[iwd]# station device get-networks`} />
                                Finally, to connect to a network:
                                <Code code={`[iwd]# station device connect SSID`} />
                                Finally Exit from the [iwd] prompt:
                                <Code code={`[iwd]# exit`} />
                                For check Your internet connection connectivity use <b>ping</b>
                                <br />
                                You can ping Google’s DNS as shown:
                                <Code code={`# ping 8.8.8.8 -c 4`} />
                                You should get a positive reply as shown.
                                <br />
                                <br />
                                <img
                                    style={{ width: '100%', borderRadius: '10px' }}
                                    src="/img/confirm-internet.webp" alt={`confirm-internet`}
                                />
                                <br />
                                <br />
                                Use the <code>Ctrl + c</code> for exit from running process.
                            </p>
                            <br />
                            <p>
                                <h2>Step 6 : Update time and date</h2>
                            </p>
                            <br />
                            <p>
                                Next, we are going to update the system time and date using the timedatectl command as shown.
                                <Code code={`# timedatectl set-ntp true`} />
                                You can thereafter confirm the time and date using the command
                                <Code code={`# timedatectl status`} />

                            </p>
                            <br />
                            <p>
                                <h2>Step 7 : Create &amp; format Linux partitions</h2>
                            </p>
                            <br />

                            <p>
                                Next, we are going to partition our hard drive and create some Linux partitions. An easy way of doing this is using the cfdisk utility. Run the command:
                                <Code code={`# cfdisk`} />
                                This displays all the partitions available including Windows partitions.
                                <br />
                                <br />
                                <img
                                    style={{ width: '100%', borderRadius: '10px' }}
                                    src="/img/view-all-partition.webp" alt={`view-all-partition`}
                                />
                                <br />
                                <br />
                                As you can see, we have some free space of 19.5G that we created earlier in step 1 from shrinking drive C on the Windows side. Using this partition, we shall create the following Linux partitions :
                                <br />
                                <br />
                                <ul>
                                    <li>Root partition &nbsp; &nbsp; &nbsp; &nbsp;/ &nbsp; &nbsp; &nbsp; &nbsp;12G</li>
                                    <li>swap partition  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;4G</li>
                                </ul>
                                <br />
                                To achieve this, we will navigate to the free space with 19.5G just after /dev/sda3 volume and hit ENTER. We will then specify the volume as 12G for the root partition as shown below. Then hit ENTER.
                                <br />
                                <br />
                                <img
                                    style={{ width: '100%', borderRadius: '10px' }}
                                    src="/img/create-root-partition.webp" alt={`create-root-partition`}
                                />
                                <br />
                                <br />
                                The root partition will be created with the Linux filesystem type as shown.
                                <br />
                                <br />
                                <img
                                    style={{ width: '100%', borderRadius: '10px' }}
                                    src="/img/root-partition-created.webp" alt={`root-partition-created`}
                                />
                                <br />
                                <br />
                                Next, we will create another partition for swap. Using the same method, we will proceed to the remaining free partition of 7G and select the ‘New’ option.
                                <br />
                                <br />
                                <img
                                    style={{ width: '100%', borderRadius: '10px' }}
                                    src="/img/create-new-partition.webp" alt={`create-new-partition`}
                                />
                                <br />
                                <br />
                                Specify the partition size as 4G
                                <br />
                                <br />
                                <img
                                    style={{ width: '100%', borderRadius: '10px' }}
                                    src="/img/specify-partition.webp" alt={`specify-partition`}
                                />
                                <br />
                                <br />
                                Since this will be our swap partition, we need to go the extra step and modify the partition type. Therefore, we will select the ‘type’ option and hit ENTER.
                                <br />
                                <br />
                                <img
                                    style={{ width: '100%', borderRadius: '10px' }}
                                    src="/img/change-type-of-partition.webp" alt={`change-type-of-partition`}
                                />
                                <br />
                                <br />
                                In the list that appears, select ‘Linux Swap’ and hit ENTER.
                                <br />
                                <br />
                                <img
                                    style={{ width: '100%', borderRadius: '10px' }}
                                    src="/img/set-to-Linux-swap.webp" alt={`set-to-Linux-swap`}
                                />
                                <br />
                                <br />
                                At this point, both the root and Linux swap partitions are created as seen from the partition table below.
                                <br />
                                <br />
                                <img
                                    style={{ width: '100%', borderRadius: '10px' }}
                                    src="/img/Linux-swap-created.webp" alt={`Linux-swap-created`}
                                />
                                <br />
                                <br />
                                To save the partitions, select the ‘Write’ option and hit ENTER.
                                <br />
                                <br />
                                <img
                                    style={{ width: '100%', borderRadius: '10px' }}
                                    src="/img/select-write-option.webp" alt={`select-write-option`}
                                />
                                <br />
                                <br />
                                When prompted if you want to write the partition to disk, simply type ‘yes’ and hit ENTER.
                                <br />
                                <br />
                                <img
                                    style={{ width: '100%', borderRadius: '10px' }}
                                    src="/img/accept-writing-changes.webp" alt={`accept-writing-changes`}
                                />
                                <br />
                                <br />
                                To exit cfdisk utility, select the ‘Quit’ option and hit ENTER.
                                <br />
                                <br />
                                <img
                                    style={{ width: '100%', borderRadius: '10px' }}
                                    src="/img/exit-cfdisk.webp" alt={`exit-cfdisk`}
                                />
                                <br />
                                <br />
                            </p>
                            <br />
                            <p>
                                <h2>Step 8 : Format and mount the partitions</h2>
                            </p>
                            <br />
                            <p>
                                For the partitions to become usable and available for use, we need to format them and later mount them.
                                <br />
                                To format the root partition, run the command:
                                <Code code={`# mkfs.ext4 /dev/sda5`} />
                                <br />
                                <img
                                    style={{ width: '100%', borderRadius: '10px' }}
                                    src="/img/Format-root-partition.webp" alt={`Format-root-partition`}
                                />
                                <br />
                                <br />
                                For swap partition, use the command:
                                <Code code={`# mkswap /dev/sda6`} />
                                Then enable swap using the swapon command shown:
                                <Code code={`# swapon /dev/sda6`} />
                                <br />
                                <img
                                    style={{ width: '100%', borderRadius: '10px' }}
                                    src="/img/Format-swap.webp" alt={`Format-swap`}
                                />
                                <br />
                                <br />
                                Next, mount the root partition to the /mnt directory
                                <Code code={`# mount /dev/sda5 /mnt`} />
                                Additionally, we are going to create a directory for the EFI partition on which we will mount the Windows EFI system which , in our case is located on the /dev/sda1 partition.
                                <Code code={`# mkdir /mnt/efi`} />
                                Then mount the EFI partition on the EFI mount point.
                                <Code code={`# mount /dev/sda1 /mnt/efi`} />
                            </p>
                            <br />
                            <p>
                                <h2>Step 9 : Install base system and other required Linux firmware packages</h2>
                            </p>
                            <br />
                            <p>
                                Next, we are going to install the central packages for our Linux system including the base and Linux-firmware packages.
                                <Code code={`# pacstrap /mnt base linux linux-firmware`} />
                                This is going to take quite some time. At this point, you can take a much-deserved break and head out for a stroll and grab some coffee.
                            </p>
                            <br />
                            <p>
                                <h2>Step 10 : Generate fstab file</h2>
                            </p>
                            <br />
                            <p>
                                The next step will be to generate the fstab file on the /mnt directory as follows.
                                <Code code={`# genfstab -U /mnt >> /mnt/etc/fstab`} />
                            </p>
                            <br />
                            <p>
                                <h2>Step 11 : Change Directory</h2>
                            </p>
                            <br />
                            <p>
                                After generating the ftab file, navigate to the newly created root filesystem
                                <Code code={`# arch-chroot /mnt`} />
                                You can verify that you are in the root filesystem using the command as shown.
                                <Code code={`# ls`} />
                            </p>
                            <br />
                            <p>
                                <h2>Step 12 : Setup timezone</h2>
                            </p>
                            <br />
                            <p>
                                To set time zone :
                                <Code code={`# ln -sf /usr/share/zoneinfo/Region/City /etc/localtime`} />
                                Run hwclock to generate /etc/adjtime:
                                <Code code={`# hwclock --systohc`} />
                            </p>
                            <br />
                            <p>
                                <h2>Step 13 : Set up locale</h2>
                            </p>
                            <br />
                            <br />
                            <p>
                                <h2>Step 13 : Set up locale</h2>
                            </p>
                            <br />
                            <p>
                                The locale determines the system language, currency format, numbering and date on your system. This information is contained in the /etc/locale.gen  file. So, open the file using the vim editor.
                                <Code code={`# vim /etc/locale.gen`} />
                                <p className="note">
                                    <strong>Note : </strong> To install the vim editor, use the pacman command as follows:
                                </p>
                                <Code code={`# pacman -Sy vim`} />
                                Once you have accessed the file, scroll and uncomment your preferred locale. In this case, we have decided to go with en_US.UTF-8 UTF-8
                                <br />
                                Save and exit the file. Next generate the locale configuration using the command.
                                <Code code={`# locale-gen`} />
                                Next, create a new locale configuration file and save the locale as shown.
                                <Code code={`# echo "LANG=EN_US.UTF-8" > /etc/locale.conf`} />
                            </p>
                            <br />
                            <p>
                                <h2>Step 13 : Set up hostname</h2>
                            </p>
                            <br />
                            <p>
                                Next, we are going to configure the hostname of our Arch System. First, create a new file and specify the hostname as shown.
                                <Code code={`# echo linuxtechi > /etc/hostname`} />
                                <br />
                                <img
                                    style={{ width: '100%', borderRadius: '10px' }}
                                    src="/img/set-hostname.webp" alt={`set-hostname`}
                                />
                                <br />
                                Afterwards, modify the /etc/hosts file as follows.
                                <Code code={`# echo "127.0.1.1  linuxtechi" >> /etc/hosts`} />
                            </p>
                            <br />
                            <p>
                                <h2>Step 14 : Install netctl Network Manager</h2>
                            </p>
                            <br />
                            <p>
                                To use the internet once the installation is complete and upon a reboot, we need to install a network manager. In this example we wil install the netctl network manager as follows
                                <Code code={`# pacman -S networkmanager`} />
                                <b>Enable NetworkManager</b>
                                <br />
                                After installation, you should start/enable NetworkManager.service. Once the NetworkManager daemon is started, it will automatically connect to any available "system connections" that have already been configured. Any "user connections" or unconfigured connections will need nmcli or an applet to configure and connect.
                                <Code code={`# systemctl start NetworkManager.service`} />
                                <Code code={`# systemctl enable NetworkManager.service`} />
                            </p>
                            <br />
                            <p>
                                <h2>Step 15 : Create a regular user</h2>
                            </p>
                            <br />
                            <p>
                                Next, we will create a regular user called  linuxtechi and place him in the wheel group as follows.
                                <Code code={`# useradd -G wheel -m linuxtechi`} />
                                The next step will be to assign a password to the user.
                                <Code code={`# passwd linuxtechi`} />
                                <br />
                                <img
                                    style={{ width: '100%', borderRadius: '10px' }}
                                    src="/img/create-a-user.webp" alt={`create-a-user`}
                                />
                                <br />
                            </p>
                            <br />
                            <p>
                                <h2>Step 16 : Install GRUB bootloader</h2>
                            </p>
                            <br />
                            <p>
                                We are getting close to the finish line. In this step, we will install the  grub bootloader to enable us boot into our Arch Linux system upon a reboot.
                                <br />
                                We will install the grub bootloader package alongside the efi boot manager package since we are using the UEFI mode.
                                <Code code={`# pacman -S grub efibootmgr`} />
                                <br />
                                <img
                                    style={{ width: '100%', borderRadius: '10px' }}
                                    src="/img/Install-grub-efibootmgr.webp" alt={`Install-grub-efibootmgr`}
                                />
                                <br />
                                Next, install the os-prober package which will enable Arch Linux to detect the Windows operating system.
                                <Code code={`# pacman -S os-prober`} />
                                <br />
                                <img
                                    style={{ width: '100%', borderRadius: '10px' }}
                                    src="/img/Install-os-prober.webp" alt={`Install-os-prober`}
                                />
                                <br />
                                Then install grub on the EFI directory as shown.
                                <Code code={`# grub-install --target=x86_64-efi --efi-directory=/efi --bootloader-id=GRUB`} />
                                <br />
                                <img
                                    style={{ width: '100%', borderRadius: '10px' }}
                                    src="/img/install-grub-bootloader.webp" alt={`install-grub-bootloader`}
                                />
                                <br />
                                And install a grub configuration file as shown.
                                <Code code={`# grub-mkconfig -o /boot/grub/grub.cfg`} />
                                <br />
                                <img
                                    style={{ width: '100%', borderRadius: '10px' }}
                                    src="/img/generate-grub-file.webp" alt={`generate-grub-file`}
                                />
                                <br />
                                The last line is an indication that Arch has detected the presence of Windows Boot manager on /dev/sda1 partition. Perfect!
                                <br />
                                The finally, set a password for the root user as shown.
                                <Code code={`# passwd`} />
                                <br />
                                <img
                                    style={{ width: '100%', borderRadius: '10px' }}
                                    src="/img/set-root-passwd.webp" alt={`set-root-passwd`}
                                />
                                <br />
                                Then exit and reboot your system.
                                <Code code={`# exit\n# reboot`} />
                                <p>
                                    Finally You have installed the Arch Linux.😊
                                </p>
                            </p>
                        </p>
                    </div>
                </div>
            </section>
        </>
    )
}

export default ArchGuide
