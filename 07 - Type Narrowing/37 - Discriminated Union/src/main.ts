type SuccessApiResponse = {
  status: 'Success';
  data: { name: string; age: number };
};
type ErrorApiResponse = {
  status: 'Error';
  ErrMsg: string;
};

type UserApiResponse = SuccessApiResponse | ErrorApiResponse | { status: 'new' };

function func(res: UserApiResponse) {
  switch (res.status) {
    case 'Success':
      console.log(res.data.name);
      break;
    case 'Error':
      console.log(res.ErrMsg.length);
      break;
    default:
      const exhaustionCheck: never = res.status;
  }
}
