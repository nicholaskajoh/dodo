import Layout from '../components/Layout';
import PianoKeyboard from '../components/PianoKeyboard';

export default function Piano() {
  return (
    <Layout pageTitle="Piano">
      <PianoKeyboard numOctaves={5} />
    </Layout>
  );
}
