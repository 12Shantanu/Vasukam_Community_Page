import Head from "next/head";
import Link from "next/link";

function AI() {
  return (
    <div className="max-w-[512px] mx-auto p-10 bg-white rounded-lg">
      <Head>
        <title>AI Image &amp; Replicate</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      {/* <h1 className="text-center text-7xl pb-3">🎨</h1> */}
      <p className="pb-5 text-lg">
        <strong>Find Some Beter Image </strong> 
        This Is The Place Where You Can Generate Digital Image Using Your Text In Our Prompt
         This{" "}
       
        This Technology Is Used to Mimic Or Replicate A Specific Target
      </p>

      <Link href="/Stable">
        <video autoPlay loop muted playsInline className="w-full cursor-pointer">
          <source src="/cherries-oranges-bananas.mp4" />
        </video>
      </Link>

      {/* <ol className="list-decimal pl-5">
        <li className="mb-2">
          Enter a text prompt to generate an image, or upload your own starting
          image.
        </li>
        <li className="mb-2">
          Click and drag with your mouse to erase unwanted parts of the image.
        </li>
        <li className="mb-2">
          Refine your text prompt (or leave it untouched) and let the model
          generate a new inpainted image.
        </li>
      </ol> */}

      <Link href="/Stable">
        <h1 className="py-3 block text-center bg-black text-white rounded-md mt-10">
          Start Generating
        </h1>
      </Link>
    </div>
  );
}

export default AI;