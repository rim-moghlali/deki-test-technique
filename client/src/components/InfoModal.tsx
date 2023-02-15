import { useState } from 'react';
import { Button, Modal } from 'antd';

export default function InfoModal() {
	const [isModalOpen, setIsModalOpen] = useState(false);

	const handleModal = () => {
		setIsModalOpen(() => !isModalOpen);
	};

	return (
		<>
			<Button type="primary" onClick={handleModal}>
				Stack Info
			</Button>
			<Modal
				title="Technical stack :"
				open={isModalOpen}
				onOk={handleModal}
				onCancel={handleModal}
			>
				<p>Server: NodeJs, Express with a REST API and Typescript</p>
				<p>Client: ReactJs, Axios, Ant Design and Typescript</p>
			</Modal>
		</>
	);
}
