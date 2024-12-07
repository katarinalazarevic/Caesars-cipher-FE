import { MainPageContent } from 'src/contents/main-page-content/main-page-content'
import MainLayout from 'src/layouts/main-layout'

export const MainPage = () => {
  return (
    <MainLayout backgroundColor={''} >
        <MainPageContent />
    </MainLayout>
  )
}
