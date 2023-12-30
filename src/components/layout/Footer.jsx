import { Button } from "../ui/button"

const Footer = () => {
  return (
    <footer className="flex items-center w-full p-6 bg-background z-50">
      <div className="md:ml-auto max-w-7xl mx-auto w-full justify-between md:justify-end flex items-center gap-x-2 text-muted-foreground">
        <Button variant="ghost" size="sm">
          Privacy Policy
        </Button>
        <Button variant="ghost" size="sm">
          Terms & Conditions
        </Button>
      </div>
    </footer>
  )
}

export default Footer
