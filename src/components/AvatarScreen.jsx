export default function AvatarScreen({ title }) {

  return (
    <div className="h-screen flex flex-col items-center justify-center">

      <h1 className="text-2xl mb-10">{title}</h1>

      <div className="w-40 h-40 bg-slate-700 rounded-full flex items-center justify-center">
        Dummy Avatar
      </div>

      <button
        className="mt-10 bg-red-500 px-6 py-3 rounded-lg"
      >
        End Conversation
      </button>

    </div>
  );
}