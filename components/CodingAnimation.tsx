import {
    AnimatedSpan,
    Terminal,
    TypingAnimation,
  } from "@/components/magicui/terminal";
  
  export function CodingAnimation() {
    return (
      <Terminal>
        <TypingAnimation>> hexagun-cli init --project my-app</TypingAnimation>
  
        <AnimatedSpan delay={1500} className="text-green-500">
          <span>✔ Initializing Hexagun project structure.</span>
        </AnimatedSpan>
  
        <AnimatedSpan delay={2000} className="text-green-500">
          <span>✔ Setting up hexagonal architecture.</span>
        </AnimatedSpan>
  
        <AnimatedSpan delay={2500} className="text-green-500">
          <span>✔ Configuring microservices.</span>
        </AnimatedSpan>
  
        <AnimatedSpan delay={3000} className="text-green-500">
          <span>✔ Integrating responsive design modules.</span>
        </AnimatedSpan>
  
        <AnimatedSpan delay={3500} className="text-green-500">
          <span>✔ Adding web development frameworks.</span>
        </AnimatedSpan>
  
        <AnimatedSpan delay={4000} className="text-green-500">
          <span>✔ Setting up mobile development environments.</span>
        </AnimatedSpan>
  
        <AnimatedSpan delay={4500} className="text-green-500">
          <span>✔ Installing business analysis tools.</span>
        </AnimatedSpan>
  
        <AnimatedSpan delay={5000} className="text-green-500">
          <span>✔ Validating project configuration.</span>
        </AnimatedSpan>
  
        <AnimatedSpan delay={5500} className="text-green-500">
          <span>✔ Writing configuration files.</span>
        </AnimatedSpan>
  
        <AnimatedSpan delay={6000} className="text-blue-500">
          <span>ℹ Project setup complete.</span>
          <span className="pl-2">- Created: my-app/</span>
        </AnimatedSpan>
  
        <TypingAnimation delay={6500} className="text-muted-foreground">
          Success! Your Hexagun project is ready.
        </TypingAnimation>
  
        <TypingAnimation delay={7000} className="text-muted-foreground">
          Start building with: cd my-app && hexagun-cli dev
        </TypingAnimation>
      </Terminal>
    );
  }