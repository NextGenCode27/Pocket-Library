import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";

const LandingFooterSection = () => (
  <footer
    id="footer-section"
    className="bg-card px-6 md:px-10 py-12 flex flex-col gap-10"
  >
    <div className="flex flex-col gap-8 md:flex-row w-full items-start md:items-center justify-between">
      <div className="flex flex-col gap-6 text-start md:text-left w-full md:w-1/3">
        <div className="flex items-center gap-2">
          <img src="/books/books-stack.png" alt="" height={45} width={45} />
          <h3
            aria-label="App Logo and Title"
            className="text-xl font-semibold"
            style={{ fontFamily: "--babas-neue" }}
          >
            POCKET <span className="text-primary">LIBRARY</span>
          </h3>
        </div>

        <div className="flex flex-col gap-1">
          <h2 className="text-lg text-primary font-medium">
            About Pocket Library
          </h2>
          <p className="text-sm text-muted-foreground max-w-sm md:mx-0">
            Pocket Library is a personal project by NextGen, dedicated to
            helping users manage their book collections efficiently and read
            anywhere with ease.
          </p>
        </div>
      </div>

      <div className="flex flex-col gap-2 text-start md:text-left w-full md:w-1/3">
        <h2 className="text-lg text-primary font-medium">Contact Us</h2>
        <p className="text-sm text-muted-foreground">📞 +91 7020635473</p>
        <p className="text-sm text-muted-foreground">
          📧 nextgencode27@gmail.com
        </p>
        <p className="text-sm text-muted-foreground">
          🌐 www.nextgenofficial.com
        </p>
      </div>

      <div className="flex flex-col gap-2 w-full md:w-1/3 items-start md:items-start">
        <Label className="text-sm font-medium">Subscribe for Updates</Label>
        <div className="flex flex-col sm:flex-row gap-2 w-full sm:w-auto">
          <Input
            placeholder="m@example.com"
            type="email"
            className="w-full sm:w-60"
          />
          <Button className="w-full sm:w-auto">Subscribe</Button>
        </div>
      </div>
    </div>

    {/* Divider */}
    <Separator />

    {/* Bottom Section */}
    <div className="flex flex-col sm:flex-row items-center justify-between gap-2 text-center sm:text-left">
      <p className="text-xs text-muted-foreground">
        &copy; {new Date().getFullYear()} NextGen. All rights reserved.
      </p>
      <p className="text-xs text-muted-foreground">Made with ❤️ by NextGen</p>
    </div>
  </footer>
);

export default LandingFooterSection;
