import { Box } from '@mui/material'
import Accordian from '../ui/Accordian'

const Faq = () => {
  return (
    <Box m="20px" display={'flex'} flexDirection={'column'} gap={'15px'}>
      <Accordian
        title="How to manage my team?"
        details=" Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget."
      />
      <Accordian
        title="How to see my balance?"
        details="Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam, at
        magnam cumque enim quam in non. Non voluptate necessitatibus odit.
        Totam, soluta! Quisquam sit iste unde accusamus incidunt quibusdam
        odio odit voluptates, omnis placeat harum officiis quas beatae cum
        quasi rerum non sed tempore praesentium laborum, delectus totam
        soluta temporibus."
      />
      <Accordian
        title="Can i add a new contact?"
        details="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestiae
        aliquam architecto, quisquam quis dicta eaque quas neque? Placeat,
        hic nam."
      />
      <Accordian
        title="How to Set up a new team?"
        details=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque
        accusamus eveniet laborum suscipit? Cumque velit sed tempora, sunt
        placeat, distinctio impedit ratione aliquid earum quae, nesciunt
        porro voluptatem deserunt dignissimos aliquam aspernatur adipisci
        exercitationem quasi repellat ipsa ipsam ad? Hic corrupti quis
        fugiat distinctio. Harum numquam, voluptatum delectus, nihil
        facilis, quam qui architecto officia nemo recusandae reprehenderit
        facere laudantium sed aliquam debitis iste eaque quas impedit eos!
        Esse, nesciunt minus!"
      />
      <Accordian
        title="Can i edit my profile?"
        details="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
        malesuada lacus ex, sit amet blandit leo lobortis eget."
      />
    </Box>
  )
}

export default Faq
