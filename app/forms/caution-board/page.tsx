import { Suspense } from "react";

import CautionBoardForm from "@/app/ui/forms/cautionboardform";
import Header from "@/app/ui/header";

const Page = () => {
  return (
    <main>
      <Header title="Caution Board Form" />

      <Suspense>
        <CautionBoardForm />
      </Suspense>
    </main>
  );
};

export default Page;
