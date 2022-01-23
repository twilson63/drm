import "dotenv"
import { connect } from 'hyper-connect'

export default connect(Deno.env.get('HYPER'))