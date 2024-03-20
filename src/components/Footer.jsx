import { Github } from "lucide-react";


export default function Footer() {
  return (
    <div className="text-lg text-center relative isolate px-6 pt-24 pb-8 lg:px-8">
      <div className="flex justify-center">
        <p className="font-medium text-sm flex items-center gap-x-4">
          Give it a ⭐ on
             
            <a href="https://github.com/MasumRaza1/Concisify">
                <button className="bg-black text-white py-1 px-1 rounded">
                <Github />
                </button>
              
            </a>
          
        </p>
      </div>
      <p className="mt-3 font-medium text-sm">
        Created with ❤️ by{" "}
        <span className="font-bold">
          <a href="https://github.com/MasumRaza1">Masum Raza</a>
        </span>
        .
      </p>
    </div>
  );
}
