import Image from 'next/image'
import Logo from "@/public/logo.png"

export function Footer() {
  return (
    <footer className="bg-secondary/50 border-t border-border py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                <Image className='rounded' alt='Logo Fluxy' src={Logo} />
              </div>
              <span className="text-xl font-bold text-foreground">Fluxy Technologies</span>
            </div>

            <div className="text-center md:text-right">
              <p className="text-muted-foreground">
                © {new Date().getFullYear()} Fluxy Technologies. Todos os direitos reservados.
              </p>
              <p className="text-sm text-muted-foreground mt-2">Transformando ideias em realidade digital</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
