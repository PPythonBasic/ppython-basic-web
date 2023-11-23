<script>
  import { base } from "$app/paths";
</script>

<div class="navbar bg-base-300">
  <div class="flex-1">
    <a href="{base}/" class="btn btn-ghost normal-case text-xl h-16">
      <div class="flex flex-col">
        <p>Ppython Basic</p>
        <p class="text-[12px]">เพราะพื้นฐานสำคัญที่สุด</p>
      </div>
    </a>
  </div>
  <div class="navbar-end lg:hidden">
    <div class="dropdown dropdown-end">
      <!-- svelte-ignore a11y-no-noninteractive-tabindex -->
      <!-- svelte-ignore a11y-label-has-associated-control -->
      <label tabindex="0" class="btn btn-ghost btn-circle">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          ><path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M4 6h16M4 12h16M4 18h7"
          /></svg
        >
      </label>
      <!-- svelte-ignore a11y-no-noninteractive-tabindex -->
      <ul
        tabindex="0"
        class="menu menu-sm dropdown-content mt-[10px] z-[1] p-2 shadow rounded-box w-52 bg-base-100 border"
      >
        <li><a href="{base}/articles" class="text-md"><b>บทความ</b> </a></li>
        <li><a href="{base}/pricing" class="text-md"><b>ราคา</b> </a></li>
        <li><a href="{base}/course" class="text-md"><b>บทเรียน</b> </a></li>
        <li>
          <a href="{base}/feedback" class="text-md"
            ><b>การตอบรับจากผู้เรียน</b></a
          >
        </li>
      </ul>
    </div>
  </div>
  <div class="flex-none hidden lg:block">
    <ul class="menu menu-horizontal px-1">
      <li><a href="{base}/articles" class="text-md"><b>บทความ</b> </a></li>
      <li><a href="{base}/pricing" class="text-md"><b>ราคา</b> </a></li>
      <li><a href="{base}/course" class="text-md"><b>บทเรียน</b> </a></li>
      <li>
        <a href="{base}/feedback" class="text-md"><b>การตอบรับจากผู้เรียน</b></a
        >
      </li>
    </ul>
  </div>
</div>
