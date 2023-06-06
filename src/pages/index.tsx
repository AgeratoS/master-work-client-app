import SessionFormContainer from '@/auth/containers/SessionFormContainer'
import CustomPaper from '@/common/components/CustomPaper'
import { Container } from '@mui/material'

export default function Home() {

  return (
    <>
      <Container
        maxWidth="lg"
        sx={{
          alignItems: 'center',
          display: 'flex',
          justifyContent: 'center',
          minHeight: '100vh',
        }}
      >
        <CustomPaper>
          <SessionFormContainer />
        </CustomPaper>
      </Container>
    </>
  )
}
