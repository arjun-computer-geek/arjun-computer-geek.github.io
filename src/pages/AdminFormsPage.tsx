
import React, { useState } from "react";
import { CreateProjectForm } from "@/components/forms/CreateProjectForm";
import { CreateBlogForm } from "@/components/forms/CreateBlogForm";
import { ProjectFormData } from "@/schemas/projectSchema";
import { BlogFormData } from "@/schemas/blogSchema";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const AdminFormsPage = () => {
  const [activeForm, setActiveForm] = useState<"project" | "blog">("project");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleProjectSubmit = async (data: ProjectFormData) => {
    console.log("Project data:", data);
    setIsSubmitting(true);
    // Here you would integrate with your API/Supabase
    setTimeout(() => {
      setIsSubmitting(false);
      alert("Project created successfully!");
    }, 1000);
  };

  const handleBlogSubmit = async (data: BlogFormData) => {
    console.log("Blog data:", data);
    setIsSubmitting(true);
    // Here you would integrate with your API/Supabase
    setTimeout(() => {
      setIsSubmitting(false);
      alert("Blog post created successfully!");
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-purple-900/20 py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold mb-4">Content Management</h1>
          <p className="text-lg text-muted-foreground">
            Create new projects and blog posts
          </p>
        </div>

        <Card className="w-fit mx-auto mb-8">
          <CardContent className="p-4">
            <div className="flex gap-2">
              <Button
                variant={activeForm === "project" ? "default" : "outline"}
                onClick={() => setActiveForm("project")}
              >
                Create Project
              </Button>
              <Button
                variant={activeForm === "blog" ? "default" : "outline"}
                onClick={() => setActiveForm("blog")}
              >
                Create Blog Post
              </Button>
            </div>
          </CardContent>
        </Card>

        {activeForm === "project" ? (
          <CreateProjectForm
            onSubmit={handleProjectSubmit}
            isSubmitting={isSubmitting}
          />
        ) : (
          <CreateBlogForm
            onSubmit={handleBlogSubmit}
            isSubmitting={isSubmitting}
          />
        )}
      </div>
    </div>
  );
};

export default AdminFormsPage;
