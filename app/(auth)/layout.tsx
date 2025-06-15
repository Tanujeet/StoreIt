import Image from "next/image";

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex min-h-screen">
      <section>
        <div>
          <Image
            src="/favicon.ico"
            alt="logo"
            width={16}
            height={16}
            className="h-auto"
          />
          <div className="space-y-5 text-white">
            <h1 className="h1">Manage Your files the best way</h1>
            <p></p>
          </div>
        </div>
      </section>
      {children}
    </div>
  );
};

export default layout;
