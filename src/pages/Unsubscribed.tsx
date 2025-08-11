import { useEffect } from "react";

const Unsubscribed = () => {
  useEffect(() => {
    document.title = "Unsubscribed | Needful";
  }, []);

  return (
    <main className="mx-auto max-w-2xl px-4 py-16">
      <article>
        <h1 className="text-3xl font-semibold tracking-tight mb-3">Unsubscribe confirmation</h1>
        <p className="text-base leading-7 mb-6">You're unsubscribed. You will no longer receive emails at this address.</p>
        <p className="text-sm opacity-80">If this was a mistake, you can resubscribe by submitting the form again.</p>
      </article>
    </main>
  );
};

export default Unsubscribed;
