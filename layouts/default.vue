<template>
  <div class='flex justify-between h-[100vh]'>
    <LayoutSidebar />
    <div class='w-full  flex-1 overflow-y-scroll'>
      <LayoutHeader />
      <div style="min-height:calc(100vh - 80px);" class='w-full flex justify-items-stretch  bg-white p-5'>
        <div class="w-full p-5">
          <NuxtPage />
        </div>
      </div>
      <LayoutFooter />
    </div>
  </div>
</template>
