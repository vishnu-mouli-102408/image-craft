import { Spinner } from "@repo/ui/global/spinner";

const Loading = () => {
	return (
		<div className="flex h-screen w-screen items-center justify-center">
			<Spinner variant="circle-filled" />
		</div>
	);
};

export default Loading;
