import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";

const LandingSignInModal = () => {
  return (
    <Dialog>
      <DialogTrigger className="bg-primary rounded-md w-xs px-4 py-2 text-primary-foreground font-medium hover:bg-primary/90 transition-all">
        Sign in
      </DialogTrigger>
      <form action="">
        <DialogContent className="w-[400px]">
          <DialogHeader className="gap-0">
            <DialogTitle className="text-2xl">Welcome Back!</DialogTitle>
            <DialogDescription className="text-muted-foreground">
              Please enter your login credentials to continue.
            </DialogDescription>
          </DialogHeader>
          <Separator />
          <div className="flex flex-col gap-4">
            <div className="flex flex-col gap-2">
              <Label>Library ID</Label>
              <Input type="text" placeholder="000 123 456" />
            </div>
            <div className="flex flex-col gap-2">
              <Label>Password</Label>
              <Input type="password" placeholder="********" />
            </div>
            <div className="flex flex-row items-center justify-end">
              <Button variant={"link"}>Forgot Password?</Button>
            </div>
          </div>
          <DialogFooter>
            <DialogClose asChild>
              <Button variant="outline">Cancel</Button>
            </DialogClose>
            <Button type="submit">Login</Button>
          </DialogFooter>
        </DialogContent>
      </form>
    </Dialog>
  );
};

export default LandingSignInModal;
