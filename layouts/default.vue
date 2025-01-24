<template>
  <div class='flex justify-between h-[100vh]'>
    <LayoutSidebar />
    <div class='w-full  flex-1 overflow-y-scroll'>
      <LayoutHeader />
      <div style="min-height:calc(100vh - 80px);" class='w-full  bg-white p-7'>
        <NuxtPage />
      </div>
      <LayoutFooter />
    </div>
  </div>
</template>
