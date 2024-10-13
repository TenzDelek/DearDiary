'use client'
import { Button } from '@/components/ui/button'
import { Card, CardHeader, CardDescription, CardTitle, CardContent } from '@/components/ui/card'
import { Book, Sparkles, Lock, Users, Heart, Zap, BarChart, Calendar } from 'lucide-react'
import { useState } from 'react'
import Link from "next/link"

const About = () => {
    const [activeFeature, setActiveFeature] = useState(null)
    const features = [
        {
          icon: <Book className="h-8 w-8" />,
          title: "Digital Journaling",
          description: "Capture your thoughts and memories in a beautiful, organized digital format.",
          details: "Our intuitive editor supports rich text formatting, image uploads, and voice notes, making it easy to express yourself in various ways."
        },
        {
          icon: <Lock className="h-8 w-8" />,
          title: "Private & Secure",
          description: "Your entries are encrypted and only accessible to you. Your privacy is our top priority.",
          details: "We use industry-standard encryption methods to ensure your data is safe. You can also enable two-factor authentication for an extra layer of security."
        },
        {
          icon: <Sparkles className="h-8 w-8" />,
          title: "Mood Tracking",
          description: "Visualize your emotional journey with our intuitive mood tracking feature.",
          details: "Track your mood daily and view beautiful charts that help you understand your emotional patterns over time. Identify triggers and celebrate positive trends."
        },
        {
          icon: <Users className="h-8 w-8" />,
          title: "Community Support",
          description: "Connect with like-minded individuals in our supportive journaling community.",
          details: "Join themed journaling challenges, participate in writing prompts, and share insights (anonymously if you prefer) with a community that understands the power of self-reflection."
        },
        {
          icon: <Heart className="h-8 w-8" />,
          title: "Self-Care Tools",
          description: "Access guided meditation, gratitude prompts, and other self-care resources.",
          details: "Integrate mindfulness into your journaling practice with our curated selection of guided meditations, breathing exercises, and daily affirmations."
        },
        {
          icon: <Zap className="h-8 w-8" />,
          title: "AI-Powered Insights",
          description: "Gain deeper understanding of your entries with our AI analysis tools.",
          details: "Our advanced AI can identify recurring themes, suggest areas for personal growth, and even offer writing prompts based on your journaling history."
        },
        {
          icon: <BarChart className="h-8 w-8" />,
          title: "Progress Tracking",
          description: "Set personal goals and track your progress over time.",
          details: "Whether it&apos;s developing a new habit or working towards a long-term goal, DearDiary helps you stay accountable and celebrate your milestones."
        },
        {
          icon: <Calendar className="h-8 w-8" />,
          title: "Customizable Reminders",
          description: "Never miss a journaling session with personalized reminders.",
          details: "Set up daily, weekly, or custom reminders that fit your schedule. Receive gentle nudges to maintain your journaling habit."
        },
    ]

    return (
        <div className="min-h-screen bg-[#0A0A0A] text-[#FAFAFA] overflow-hidden">
            <div className="relative container mx-auto px-4 py-16">
                <header className="text-center mb-16">
                    <h1 className="text-6xl font-bold mb-4">
                        Meet DearDiary, your space for life&apos;s moments
                    </h1>
                    <p className="text-2xl text-gray-300 max-w-2xl mx-auto">
                        Embark on a journey of self-discovery and growth through the power of journaling.
                    </p>
                </header>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
                    {features.map((feature, index) => (
                        <div
                            key={feature.title}
                            className=" p-6 rounded-md cursor-pointer transition-all duration-300 hover:ring-2 hover:ring-blue-400"
                            onClick={() => setActiveFeature(activeFeature === index ? null : index)}
                        >
                            <FeatureCard
                                icon={feature.icon}
                                title={feature.title}
                                description={feature.description}
                                isActive={activeFeature === index}
                            />
                            {activeFeature === index && (
                                <div className="mt-4 p-4 bg-gray-900/80 backdrop-blur-sm rounded-md">
                                    <p className="text-sm text-gray-300">{feature.details}</p>
                                </div>
                            )}
                        </div>
                    ))}
                </div>

                <footer className="text-center text-sm text-gray-500">
                    <p>&copy; {new Date().getFullYear()} DearDiary. All rights reserved.</p>
                </footer>
            </div>
        </div>
    )
}

export default About

function FeatureCard({ icon, title, description, isActive }) {
    return (
        <Card className={`bg-[#171717] border-gray-800 ${isActive ? 'ring-2 ring-white-400' : ''}`}>
            <CardHeader>
                <CardTitle className="flex items-center gap-2 text-xl font-semibold">
                    {icon}
                    <span className="">{title}</span>
                </CardTitle>
            </CardHeader>
            <CardContent>
                <CardDescription className="text-gray-300">{description}</CardDescription>
            </CardContent>
        </Card>
    )
}
