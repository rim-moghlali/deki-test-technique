import { useState } from 'react';
import { getHelloWorld } from './routes/helloWorld';
import { getUsers } from './routes/users';
import { Button, Layout, Space, List, Avatar } from 'antd';
import { headerStyle, contentStyle } from './styles/app.style';
import InfoModal from './components/InfoModal';
import Typography from 'antd/es/typography/Typography';

export default function App() {
	const [message, setMessage] = useState('');
	const [users, setUsers] = useState(Array<any>);
	const { Header, Content } = Layout;

	// let list = [ {name: 'Rim', email: 'rim@laplateforme.io'} ];

	// const usersData = [];

	const sayHello = async () => {
		const message = await getHelloWorld();
		setMessage(message);
	};

	
	const loadUsers = async () => {
		const users = await getUsers();
		// const users = [ {name: 'Rim', email: 'rim@laplateforme.io'} ];
		// list = users;
		setUsers([...users]);
	};
	

	loadUsers();

	console.log(users);
	console.log('loove');
	// alert(users.length);

	return (
		<Space direction="vertical" style={{ width: '100%' }} size={[0, 48]}>
			<Layout>
				<Header style={headerStyle}>
					<Button type="primary" onClick={sayHello}>
						{message ? message : 'Example'}
					</Button>
					<Typography>Deki - Technical test</Typography>
					<InfoModal />
				</Header>
				<Content style={contentStyle}>

					<List
						header={<div>Users</div>}
						bordered
						dataSource={users}
						renderItem={(item) => (
							<List.Item>
								<List.Item.Meta
									avatar={<Avatar src={item.avatar} />}
									title={<div>{item.first_name} {item.last_name}</div>}
									description={<div>{item.email}</div>}
								/>
							</List.Item>
						)}
					/>
				</Content>
			</Layout>
		</Space>
	);
}
