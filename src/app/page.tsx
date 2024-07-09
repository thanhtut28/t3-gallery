const mockUrls = [
  "https://utfs.io/f/12382230-5ada-4fb3-8a01-e55620b7e47d-gby9ah.jpg",
  "https://utfs.io/f/bb9defc3-d1fd-4963-a19e-a9a9d98e6fbb-qge93q.jpg",
  "https://utfs.io/f/d90e7254-0e0c-44e9-bfe7-48f1a88c35b9-rvmt1.jpg",
  "https://utfs.io/f/9eab3831-7d99-450a-af28-15403543c69b-ohierx.jpg",
];

const mockImages = mockUrls.map((url, index) => ({ id: index + 1, url }));

export default function HomePage() {
  return (
    <main className="">
      <div className="flex flex-wrap gap-4">
        {[...mockImages, ...mockImages, ...mockImages].map((image) => (
          <div key={image.id} className="w-48">
            <img
              src={image.url}
              alt="image"
              className="aspect-video object-cover"
            />
          </div>
        ))}
      </div>
    </main>
  );
}
