import type { NextPage } from 'next';
import SafeEnvironment from 'ui/components/feedback/SafeEnviroment/SafeEnvironment';
import PageTitle from 'ui/components/data-display/PageTitle/PageTitle';
import UserInformation from 'ui/components/UserInformation/UserInformation';

const Home: NextPage = () => {
  return (
    <>
      <SafeEnvironment />
      <PageTitle
        title={'Conheça os profissionais'}
        subtitle={'Preencha o endereço e veja todos os profissionais da sua localidade'}
      />
      <UserInformation
        name={'Livia Minucelli'}
        rating={4}
        picture={'https://github.com/aLiviaMs.png'}
        description={'São Paulo'}
      />
      <UserInformation
        name={'Fulano de tal'}
        rating={3}
        picture={''}
        description={'São Paulo'}
      />
    </>
  )
}

export default Home
