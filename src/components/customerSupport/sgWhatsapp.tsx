import { FaWhatsapp } from 'react-icons/fa'
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip'

export default function SgWhatsappSupport() {
  return (
    <div className="fixed bottom-10 right-10 z-50 p-4">
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger id="whatsapp" aria-label="wahtsapp chat with us">
            <div>
              <a
                href="https://wa.me/90192922"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 rounded-full bg-green-500 p-3 text-white shadow-lg"
                aria-label="whatsapp chat with us"
              >
                <FaWhatsapp className="h-8 w-8" />
              </a>
            </div>
          </TooltipTrigger>
          <TooltipContent className="bg-white">
            <p className="text-lg tracking-wide text-black">
              Need Help? <span className="font-bold">Chat with us</span>
            </p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    </div>
  )
}
