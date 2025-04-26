
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FeedActivity from "@/components/FeedActivity";
import { feedActivities } from "@/lib/mock-data";

const Feed = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        <div className="container mx-auto px-6 py-12">
          <h1 className="text-3xl font-bold mb-8">Actividad reciente</h1>
          
          <div className="max-w-3xl mx-auto space-y-4">
            {feedActivities.map((activity) => (
              <FeedActivity key={activity.id} activity={activity} />
            ))}
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Feed;
