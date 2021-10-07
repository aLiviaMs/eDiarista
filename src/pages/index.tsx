import type { NextPage } from 'next';
import SafeEnvironment from 'ui/components/feedback/SafeEnviroment/SafeEnvironment';
import PageTitle from 'ui/components/data-display/PageTitle/PageTitle';

const Home: NextPage = () => {
  return (
    <>
      <SafeEnvironment />
      <PageTitle
        title={'Conheça os profissionais'}
        subtitle={'Preencha o endereço e veja todos os profissionais da sua localidade'}
      />
    </>
  )
}

export default Home
