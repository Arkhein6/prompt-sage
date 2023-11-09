"use client";
import { FormEvent, useState } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import Form from "@components/Form";

type Props = {};

const CreatePrompt = (props: Props) => {
  const {data: session} = useSession()
	const [submitting, setSubmitting] = useState(false);
	const [post, setPost] = useState({
		prompt: "",
		tag: "",
	});
	const CreatePrompt = async (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		setSubmitting(true);
		try {
			const response = await fetch("/api/prompt/new", {
				method: "POST",
				body: JSON.stringify({
					prompt: post.prompt,
					userId: session?.user?.id,
					tag: post.tag,
				}),
			});
		} catch (error) {
      console.log(error)
    }
	};
	return (
		<Form
			type={"Create"}
			post={post}
			setPost={setPost}
			submitting={submitting}
			handleSubmit={CreatePrompt}
		/>
	);
};

export default CreatePrompt;
