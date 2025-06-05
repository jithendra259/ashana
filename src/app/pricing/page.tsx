

import '../globals.css';
import 'flowbite';
import Title from '@/app/pricing/components/title';
import SalesCard from '@/app/pricing/components/salescard';
import Table1 from '@/app/pricing/components/table1';
import Table2 from '@/app/pricing/components/table2';
import Table3 from '@/app/pricing/components/table3';
import Table4 from '@/app/pricing/components/table4';
import SalesCard2 from '@/app/pricing/components/salescard2';


export default function Price() {
  return (
    <div >
      <main >
          <Title/>
          <SalesCard/>
          <Table1/>
          <Table2/>
          <Table3/>
          <Table4/>
          <SalesCard2/>
      </main>

      
    </div>
  );
}
