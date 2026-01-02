import { useState } from "react";
import { motion } from "framer-motion";
import { Upload, Plus, X, Camera, Video, Award } from "lucide-react";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { categories } from "@/data/mockData";
import { toast } from "@/hooks/use-toast";

const CreateProfile = () => {
  const [skills, setSkills] = useState<string[]>([]);
  const [newSkill, setNewSkill] = useState("");

  const addSkill = () => {
    if (newSkill.trim() && !skills.includes(newSkill.trim())) {
      setSkills([...skills, newSkill.trim()]);
      setNewSkill("");
    }
  };

  const removeSkill = (skill: string) => {
    setSkills(skills.filter((s) => s !== skill));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Profile Created!",
      description: "Your talent profile has been successfully created.",
    });
  };

  return (
    <Layout>
      <section className="py-12 md:py-20">
        <div className="container mx-auto px-4 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <h1 className="font-display font-bold text-4xl md:text-5xl mb-4">
              Create Your <span className="text-gradient">Talent Profile</span>
            </h1>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Showcase your unique skills and let the world discover your talent
            </p>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            onSubmit={handleSubmit}
            className="space-y-8"
          >
            {/* Profile Photo */}
            <div className="glass rounded-2xl p-6 md:p-8">
              <h2 className="font-display font-semibold text-xl mb-6 flex items-center gap-2">
                <Camera className="w-5 h-5 text-primary" />
                Profile Photo
              </h2>
              <div className="flex flex-col md:flex-row items-center gap-6">
                <div className="w-32 h-32 rounded-2xl bg-muted flex items-center justify-center border-2 border-dashed border-border hover:border-primary/50 transition-colors cursor-pointer">
                  <Upload className="w-8 h-8 text-muted-foreground" />
                </div>
                <div className="text-center md:text-left">
                  <p className="font-medium mb-1">Upload a professional photo</p>
                  <p className="text-sm text-muted-foreground">JPG, PNG up to 5MB. Square format recommended.</p>
                </div>
              </div>
            </div>

            {/* Basic Info */}
            <div className="glass rounded-2xl p-6 md:p-8">
              <h2 className="font-display font-semibold text-xl mb-6">Basic Information</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="name">Full Name</Label>
                  <Input id="name" placeholder="Your name" className="bg-muted/50" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="talent">Primary Talent</Label>
                  <Input id="talent" placeholder="e.g., Singer, Dancer, Artist" className="bg-muted/50" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="location">Location</Label>
                  <Input id="location" placeholder="City, Country" className="bg-muted/50" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="category">Category</Label>
                  <select 
                    id="category" 
                    className="flex h-10 w-full rounded-lg border border-input bg-muted/50 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-ring"
                  >
                    <option value="">Select a category</option>
                    {categories.map((cat) => (
                      <option key={cat.slug} value={cat.slug}>{cat.name}</option>
                    ))}
                  </select>
                </div>
              </div>
            </div>

            {/* Bio & Skills */}
            <div className="glass rounded-2xl p-6 md:p-8">
              <h2 className="font-display font-semibold text-xl mb-6">About Your Talent</h2>
              <div className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="bio">Bio</Label>
                  <Textarea 
                    id="bio" 
                    placeholder="Tell us about your talent journey, experience, and what makes you unique..."
                    className="bg-muted/50 min-h-[120px]"
                  />
                </div>
                
                <div className="space-y-2">
                  <Label>Skills</Label>
                  <div className="flex gap-2">
                    <Input
                      placeholder="Add a skill"
                      value={newSkill}
                      onChange={(e) => setNewSkill(e.target.value)}
                      onKeyPress={(e) => e.key === "Enter" && (e.preventDefault(), addSkill())}
                      className="bg-muted/50"
                    />
                    <Button type="button" variant="outline" onClick={addSkill}>
                      <Plus className="w-4 h-4" />
                    </Button>
                  </div>
                  {skills.length > 0 && (
                    <div className="flex flex-wrap gap-2 mt-3">
                      {skills.map((skill) => (
                        <Badge key={skill} variant="secondary" className="gap-1 pr-1">
                          {skill}
                          <button
                            type="button"
                            onClick={() => removeSkill(skill)}
                            className="ml-1 p-0.5 rounded-full hover:bg-background/50"
                          >
                            <X className="w-3 h-3" />
                          </button>
                        </Badge>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Media */}
            <div className="glass rounded-2xl p-6 md:p-8">
              <h2 className="font-display font-semibold text-xl mb-6 flex items-center gap-2">
                <Video className="w-5 h-5 text-primary" />
                Portfolio Media
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="border-2 border-dashed border-border rounded-xl p-8 text-center hover:border-primary/50 transition-colors cursor-pointer">
                  <Camera className="w-8 h-8 text-muted-foreground mx-auto mb-3" />
                  <p className="font-medium mb-1">Upload Images</p>
                  <p className="text-sm text-muted-foreground">Showcase your work</p>
                </div>
                <div className="border-2 border-dashed border-border rounded-xl p-8 text-center hover:border-primary/50 transition-colors cursor-pointer">
                  <Video className="w-8 h-8 text-muted-foreground mx-auto mb-3" />
                  <p className="font-medium mb-1">Upload Videos</p>
                  <p className="text-sm text-muted-foreground">Add demo reels</p>
                </div>
              </div>
            </div>

            {/* Achievements */}
            <div className="glass rounded-2xl p-6 md:p-8">
              <h2 className="font-display font-semibold text-xl mb-6 flex items-center gap-2">
                <Award className="w-5 h-5 text-primary" />
                Achievements
              </h2>
              <Textarea 
                placeholder="List your awards, certifications, competitions, or notable achievements..."
                className="bg-muted/50 min-h-[100px]"
              />
            </div>

            {/* Submit */}
            <div className="flex flex-col sm:flex-row gap-4 justify-end">
              <Button type="button" variant="ghost" size="lg">
                Save as Draft
              </Button>
              <Button type="submit" variant="hero" size="lg">
                Create Profile
              </Button>
            </div>
          </motion.form>
        </div>
      </section>
    </Layout>
  );
};

export default CreateProfile;
