import { Button } from "@/Components";
import { WorkingIcon } from "@/Resources/Images";

export const Hero = () => {
  return (
    <section>
      <article>
        <h1>More than just shorter links</h1>
        <p>
          Build your brand's recognition and get detailed insights on how your
          links are performing.
        </p>
        <Button>Get Started</Button>
      </article>
      <div>
        <img src={WorkingIcon} alt="working icon" />
      </div>
    </section>
  );
};
