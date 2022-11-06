import { useOutletContext } from "umi";

const DocsPage = () => {
  const a = useOutletContext();
  console.log('docs', a);
  
  return (
    <div>
      <p>This is umi docs.</p>
    </div>
  );
};

export default DocsPage;
