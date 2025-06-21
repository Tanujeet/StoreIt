const page = async ({ params }: SearchParamProps) => {
  const type = ((await params)?.type as string) || "";

  return (
    <div className="page-container">
          <section className="h1 capitalize">{ type}</section>
    </div>
  );
};

export default page;
