import myAxios from '../utils/myAxios';

interface HelloWorldReturn {
	message: string;
}

export async function getHelloWorld() {
	const response = await myAxios.get<HelloWorldReturn>('/helloworld');

	return response.data.message;
}
