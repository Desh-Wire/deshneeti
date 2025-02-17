import { Youtube } from "lucide-react"


const YoutubeEmbed = ({ url }: { url: string }) => {

  // Extract video ID from watch URL
  const videoId = url.split('v=')[1];
  const embedUrl = `https://www.youtube.com/embed/${videoId}`;

  return (
    <div className="border-t pt-8">
      <div className="space-y-4">
        <div className="flex items-center gap-3">
          <Youtube size={24} className="text-red-600" />
          <span className="font-medium text-gray-700">Watch Video</span>
        </div>
        <div className="aspect-video w-full">
          <iframe
            className="w-full h-full rounded-lg"
            src={embedUrl}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      </div>
    </div>
  );
}

export default YoutubeEmbed