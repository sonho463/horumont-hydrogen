import { useServerState } from "@shopify/hydrogen/client";
// Define a `LoadMore` component that takes `children` and `current` (the current
// number of products to display on the page) as props.
export default function LoadMore({ children, current }) {
  const { setServerState } = useServerState();
  // Return the Load more button. Show the first products, and then
  // load three more products upon clicking the button.
  return (
    <div>
      {children}
      <div className="py-10 text-center">
        <button
          onClick={() => {
            setServerState("first", current + 3);
          }}
          className="bg-black text-white py-2 px-4"
        >
          Load more
        </button>
      </div>
    </div>
  );
}
