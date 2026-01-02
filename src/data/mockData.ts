import { 
  Music, 
  Palette, 
  Camera, 
  Dumbbell, 
  Gamepad2, 
  Video, 
  Mic, 
  Drama, 
  ChefHat, 
  Bike,
  Guitar,
  PenTool
} from "lucide-react";

export const categories = [
  { 
    name: "Music", 
    icon: Music, 
    count: 2450, 
    slug: "music",
    gradient: "linear-gradient(135deg, hsl(280 70% 20%), hsl(320 70% 25%))"
  },
  { 
    name: "Visual Arts", 
    icon: Palette, 
    count: 1890, 
    slug: "visual-arts",
    gradient: "linear-gradient(135deg, hsl(200 70% 20%), hsl(220 70% 25%))"
  },
  { 
    name: "Photography", 
    icon: Camera, 
    count: 1650, 
    slug: "photography",
    gradient: "linear-gradient(135deg, hsl(150 60% 18%), hsl(170 60% 22%))"
  },
  { 
    name: "Sports & Fitness", 
    icon: Dumbbell, 
    count: 2100, 
    slug: "sports",
    gradient: "linear-gradient(135deg, hsl(16 70% 25%), hsl(35 70% 30%))"
  },
  { 
    name: "Gaming", 
    icon: Gamepad2, 
    count: 3200, 
    slug: "gaming",
    gradient: "linear-gradient(135deg, hsl(260 70% 22%), hsl(280 70% 28%))"
  },
  { 
    name: "Content Creation", 
    icon: Video, 
    count: 2800, 
    slug: "content-creation",
    gradient: "linear-gradient(135deg, hsl(340 70% 25%), hsl(360 70% 30%))"
  },
  { 
    name: "Public Speaking", 
    icon: Mic, 
    count: 890, 
    slug: "public-speaking",
    gradient: "linear-gradient(135deg, hsl(45 70% 22%), hsl(60 70% 28%))"
  },
  { 
    name: "Acting & Drama", 
    icon: Drama, 
    count: 1200, 
    slug: "acting",
    gradient: "linear-gradient(135deg, hsl(180 60% 18%), hsl(200 60% 24%))"
  },
  { 
    name: "Cooking", 
    icon: ChefHat, 
    count: 1450, 
    slug: "cooking",
    gradient: "linear-gradient(135deg, hsl(20 70% 22%), hsl(40 70% 28%))"
  },
  { 
    name: "Dance", 
    icon: Bike, 
    count: 1780, 
    slug: "dance",
    gradient: "linear-gradient(135deg, hsl(300 60% 22%), hsl(320 60% 28%))"
  },
  { 
    name: "Instruments", 
    icon: Guitar, 
    count: 1320, 
    slug: "instruments",
    gradient: "linear-gradient(135deg, hsl(30 60% 20%), hsl(50 60% 26%))"
  },
  { 
    name: "Writing", 
    icon: PenTool, 
    count: 980, 
    slug: "writing",
    gradient: "linear-gradient(135deg, hsl(220 50% 20%), hsl(240 50% 26%))"
  },
];

export const featuredTalents = [
  {
    id: "1",
    name: "Maya Rodriguez",
    talent: "Singer & Songwriter",
    category: "Music",
    location: "Los Angeles, CA",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=800&auto=format&fit=crop",
    rating: 4.9,
    views: 12500,
    featured: true,
  },
  {
    id: "2",
    name: "Alex Chen",
    talent: "Digital Artist",
    category: "Visual Arts",
    location: "San Francisco, CA",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&auto=format&fit=crop",
    rating: 4.8,
    views: 9800,
    featured: true,
  },
  {
    id: "3",
    name: "Jordan Williams",
    talent: "Professional Dancer",
    category: "Dance",
    location: "New York, NY",
    image: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=800&auto=format&fit=crop",
    rating: 4.9,
    views: 15200,
    featured: true,
  },
  {
    id: "4",
    name: "Priya Sharma",
    talent: "Portrait Photographer",
    category: "Photography",
    location: "Mumbai, India",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=800&auto=format&fit=crop",
    rating: 4.7,
    views: 8400,
    featured: false,
  },
  {
    id: "5",
    name: "Marcus Johnson",
    talent: "Basketball Player",
    category: "Sports",
    location: "Chicago, IL",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=800&auto=format&fit=crop",
    rating: 4.8,
    views: 11200,
    featured: true,
  },
  {
    id: "6",
    name: "Emma Thompson",
    talent: "Gaming Streamer",
    category: "Gaming",
    location: "London, UK",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=800&auto=format&fit=crop",
    rating: 4.6,
    views: 18900,
    featured: false,
  },
];

export const successStories = [
  {
    id: "1",
    name: "Sarah Mitchell",
    talent: "Classical Pianist",
    story: "Started on TalentHub as a hobby pianist, now performing at international concerts.",
    achievement: "Signed with a major record label",
    image: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=800&auto=format&fit=crop",
    beforeFollowers: 50,
    afterFollowers: 125000,
  },
  {
    id: "2",
    name: "David Park",
    talent: "Street Artist",
    story: "My graffiti art got noticed by gallery owners through TalentHub exposure.",
    achievement: "Featured in 15+ international galleries",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=800&auto=format&fit=crop",
    beforeFollowers: 200,
    afterFollowers: 89000,
  },
  {
    id: "3",
    name: "Ava Johnson",
    talent: "Fitness Trainer",
    story: "Built my personal brand from zero to a thriving online coaching business.",
    achievement: "100K+ clients transformed",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=800&auto=format&fit=crop",
    beforeFollowers: 100,
    afterFollowers: 250000,
  },
];

export const communityStats = {
  totalUsers: 125000,
  totalTalents: 45000,
  collaborations: 8500,
  countries: 95,
};
