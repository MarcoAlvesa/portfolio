import { Button } from '@/components/Button'
import { TransparentButton } from '../components/TransparentButton';
import { ArrowRight, Github, Linkedin, Download } from 'lucide-react';


const skills = [
    "Linux",
    "FreeBSD",
    "Google Cloud",
    "Terraform",
    "Docker",
    "Kubernetes",
    "Go",
    "Echo",
    "Fiber",
    "Git",
    "GitHub Actions",
    "SRE",
    "CI/CD",
]

export const Hero = () => {
    return(
    <section className="relative min-h-screen flex items-center overflow-hidden">
        {/* Bg */}
        <div className="absolute inset-0">
            <img 
                src="/hero-bg-temporaryIA.png" 
                alt="Background image" 
                className="w-full h-full object-cover opacity-40"/>
            <div className="absolute inset-0 bg-gradient-to-b from-background/20 via-background/80 to-background"/>
        </div>

        {/* Green Dots */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {[...Array(30)].map((_, i) => (
                <div 
                    className="absolute w-1.5 h-1.5 rounded-full opacity-60"
                    style={{
                        backgroundColor: "#20B2A6",
                        left: `${Math.random() * 100}%`,
                        top: `${Math.random() * 100}%`,
                        animation: `slow-dift ${
                            15 + Math.random() * 20
                        }s ease-in-out infinite`,
                        animationDelay: `${Math.random() * 5}s`    
                    }}
                />
            ))}
        </div>

        {/* Content */}
        <div className="container mx-auto px-6 pt-32 pb-20 relative z-10">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
                {/* Left Column - Text Content */}
                <div className="space-y-8">
                    <div className="animate-fade-in">
                        <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm text-primary">
                            <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                            Junior Software Enginer • DevOps & Go
                        </span>
                    </div>

                    {/* Headline */}
                    <div className="space-y-4">
                        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight animate-fade-in animation-delay-100">
                            Crafting <span className="text-primary glot-text">resilient</span>
                            <br />
                            Systems with
                            <br />
                            <span className="font-serif italic font-normal text-white">
                                precision.
                            </span>
                        </h1>
                        <p className="text-lg text-muted-foreground max-w-lg animate-fade-in animation-delay-200">
                            I'm Marco Almeida — a Software Engineer specializing in 
                            Go, Cloud Native, Kubernetes, and SRE. I build resilient platforms 
                            that allow applications to scale effortlessly.
                        </p>
                    </div>
                    
                    {/* CTA */}
                    <div className='flex flex-wrap gap-4 animate-fade-in animation-delay-300'>
                        <Button size="lg">
                            Contact Me <ArrowRight className="w-5 h-5"/>
                        </Button>
                        <TransparentButton>
                            <Download className="w-5 h-5"/>Download CV
                        </TransparentButton>
                    </div>

                    {/* Social Links */}
                    <div className="flex items-center gap-4 animate-fade-in animation-delay-400">
                        <span className="text-sm text-muted-foreground">Follow: </span>
                        {[
                            {icon: Github, href: "https://github.com/MarcoAlvesa/"},
                            {icon: Linkedin, href: "https://github.com/MarcoAlvesa/"},
                        ].map((social, idx) => (
                            <a 
                                key={idx} 
                                href={social.href} 
                                className="p-2 rounded-full glass hover:bg-primary/10 hover:text-primary transition-all duration-300"
                            >
                                {<social.icon className="w-5 h-5"/>}
                            </a>
                        ))}
                    </div>
                </div>

                {/* Right Column - Profile Image */}
                <div className="relative animate-fade-in animation-delay-300">
                    {/* Profile Image */}
                    <div className="relative max-w-md mx-auto">
                        <div 
                            className="absolute inset-0
                            rounded-3xl bh-gradient-to-br
                            from-primary/30 via-transparent
                            to-primary/10 blur-2xl animate-pulse
                        "/>
                        <div className="relative glass rounded-3xl p-2 glow-border">
                            <img 
                                src="/profile-photo-temporaryIA.png" 
                                alt="Marco Almeida" 
                                className="w-full aspect-[4/5] object-cover rounded-2xl"
                            />

                            {/* Floating Badge */}
                            <div className="absolute -bottom-4 right-4 glass rounded-xl px-4 py-3 animate-float">
                                <div className="flex items-center gap-3">
                                    <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"/>
                                    <span className="text-sm font-medium">Available for work</span>
                                </div>
                            </div>
                            {/* Stats Badge */}
                        </div>
                    </div>
                </div>
            </div>

            {/* Skills Section */}
            <div className="mt-20 animate-fade-in animation-delay-600">
                <p className="text-sm text-muted-foreground mb-6 text-center">
                    Technologies and Skills
                </p>
                <div className="relative overflow-hidden">
                    <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-background to-transparent z-10"/>
                    <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-background to-transparent z-10"/> 
                    <div className="flex animate-marquee">
                        {[...skills, ...skills].map((skill, idx) => (
                            <div key={idx} className="flex-shrink-0 px-8 py-4">
                                <span className="text-xl font-semibold text-muted-foreground/70 hover:text-muted-foreground transition-colors">
                                    {skill}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    </section>
    );
};