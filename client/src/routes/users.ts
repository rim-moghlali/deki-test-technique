import myAxios from '../utils/myAxios';

interface UsersReturn {
	email: string,
	datas: Array<object>
}

export async function getUsers() {
	const response = await myAxios.get<UsersReturn>('/users');
	console.log(response); 
	return response.data.datas;
}
