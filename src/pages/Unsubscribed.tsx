import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const Unsubscribed = () => {
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const status = params.get("status") ?? "success";

  useEffect(() => {
    document.title = "Unsubscribed | Needful";
  }, []);

  const messageMap: Record<string, string> = {
    success: "You're unsubscribed. You will no longer receive emails at this address.",
    "missing-token": "We couldn't verify your request (missing token).",
    "invalid-token": "This unsubscribe link is invalid or expired.",
    "server-error": "We couldn't process your request right now. Please try again later.",
    "unexpected-error": "Unexpected error. Please try again later.",
  };

  const message = messageMap[status] ?? messageMap.success;

  return (
    <main className="mx-auto max-w-2xl px-4 py-16">
      <article>
        <h1 className="text-3xl font-semibold tracking-tight mb-3">Unsubscribe confirmation</h1>
        <p className="text-base leading-7 mb-6">{message}</p>
        <p className="text-sm opacity-80">If this was a mistake, you can re-subscribe by submitting the form again.</p>
      </article>
    </main>
  );
};

export default Unsubscribed;
