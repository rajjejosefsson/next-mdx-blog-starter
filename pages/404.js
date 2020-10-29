import PageLayout from '../components/PageLayout'

export default function Custom404() {
  return (
    <PageLayout>
      <div className="error-wrapper">
        <span className="image" role="img" aria-label="emoji with mask">
          😷
        </span>
        <h1>Not Found</h1>
        <p>You just hit a route that doesn't exist... the sadness.</p>
      </div>

      <style jsx>{`
        .error-wrapper {
          height: 60rem;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }
        .image {
          font-size: 70px;
        }
      `}</style>
    </PageLayout>
  )
}
