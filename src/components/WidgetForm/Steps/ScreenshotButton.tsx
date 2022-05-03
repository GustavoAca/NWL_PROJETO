import { Camera } from "phosphor-react";
import html2canvas from 'html2canvas';
import { useState } from "react";
import { Loading } from './../../Loading';



interface ScreenshotButtonProps{
  onScreenshotTook: (screenshot: string) => void;
}

export function ScreenshotButton({onScreenshotTook}: ScreenshotButtonProps){

  const [isTakingScreenshot, setIsTakingScreenshot] = useState(false);


 async function handleTakeScreenshot(){

  setIsTakingScreenshot(true);

  const canvas = await html2canvas(document.querySelector('html')!);
  const base64Image = canvas.toDataURL('image/png');

  onScreenshotTook(base64Image);

  setIsTakingScreenshot(false);
  }

  return (
    <button 
          type="button"
          className="p-2 bg-zinc-800 rounded-md border-transparent hover:bg-zinc-700 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-zinc-900 focus:ring-brand-500"
          onClick={handleTakeScreenshot}
         >
            { isTakingScreenshot ? <Loading /> : <Camera className="w-6 h-6" />}
        </button>
  )
} 