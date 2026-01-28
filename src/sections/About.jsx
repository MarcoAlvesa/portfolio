import { Code2, Lightbulb, Rocket, User } from "lucide-react";

const highlights = [
    {
        icon: Code2,
        title: "Clean Code",
        description:"Writing maintainable, scalable code that stands the test of time.",
    },
    {
        icon: Rocket,
        title: "Performace",
        description: "Optimizing for speed and delivering lightning-fast user experiences."
    },
    {
        icon: User,
        title: "Collaboration",
        description: "Working closely with teams to bring ideas to life.",
    },
    {
        icon: Lightbulb,
        title: "Innovation",
        description: "Staying ahead with the lastest technologies and best practicies.",
    }

]

export const About = () => {
    return(
        <section id="about" className="py-32 relative overflow-hidden">
            <div className="container mx-auto px-6 relative z-10">
                <div className="grid lg:grid-cols02 gap-16 items-center">
                    {/* Left Column */}
                    <div className="space-y-8">
                        <div className="animate-fade-in">
                            <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase">
                                About Me
                            </span>
                        </div>
                    
                        <h2 
                            className="text-4xl md:text-5xl font-bold leading-tight animate-fade-in animation-delay-100 text-secondary-foreground"
                        >
                            Building the future,
                            <span className="font-serif italic font-normal text-white">
                                {" "}
                                 one component at a time.
                            </span>
                        </h2>
                        <div>
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum aut maiores excepturi, sunt eum repellat? Similique sequi nam veniam corrupti vel repudiandae hic, velit numquam illo ipsum tempora saepe nihil.
                            </p>
                            <p>
                                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptates autem esse dicta sequi explicabo eum libero iusto dolores nostrum molestiae aliquam recusandae quae, mollitia facilis, nobis blanditiis neque. Quibusdam, tenetur?
                            </p>
                            <p>
                                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptates autem esse dicta sequi explicabo eum libero iusto dolores nostrum molestiae aliquam recusandae quae, mollitia facilis, nobis blanditiis neque. Quibusdam, tenetur?
                            </p>
                        </div>

                        <div className="glass rounded-2xl p-6 glow-border animate-fade-in animation-delay-300">
                            <p className="text-lg font-medium italic text-foreground">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis debitis ut fugit ullam! Cumque asperiores quia aut expedita esse modi labore sed suscipit eveniet, beatae facilis, laborum rem enim. Perferendis.
                            </p>
                        </div>
                    </div>

                    {/* Right Column - Highlights */}
                    <div className="grid sm:grid-cols-2 gap-6">
                        {highlights.map((item, idx) => (
                            <div 
                                key={idx} 
                                className="glass p-6 rounded-2xl animate-fade-in" 
                                style={{animationDelay: `${(idx + 1) * 100}ms`}}
                            >
                                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 hover:bg-primary/20">
                                    <item.icon className="w-6 h-6 text-primary"/>
                                </div>
                                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                                <p className="text-sm text-muted-foreground">{item.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
        );
};