export default function Newsletter() {
  return (
    <section className="bg-red-600 py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h3 className="text-2xl font-bold text-white mb-2">Right into Mailbox</h3>
            <h2 className="text-3xl font-bold text-white mb-4">
              Get the news by subscribing to our newsletter. Tips directly!
            </h2>
          </div>
          <div>
            <form className="flex gap-4">
              {/* <Input type="email" placeholder="Enter your email" className="flex-grow bg-white" />
              <Button className="bg-black hover:bg-gray-900 text-white">Submit</Button> */}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
