<script lang="ts">
  import ModalPassword from "./modal-password.svelte";
  import passwordConfirm from "$lib/password";
  import { browser } from "$app/environment";
  import { goto } from "$app/navigation";
  import { base } from "$app/paths";

  import { onMount } from "svelte";
  export let title = "Python Basic";
  export let img = "python-programming-language";
  export let details = "สอนพื้นฐานการเขียนโปรแกรมด้วย Python เบื้องต้น";
  export let path = "python-basic";
  export let password = "";

  let dataImg: string = "";
  onMount(async () => {
    dataImg = await fetch(
      `https://source.unsplash.com/random/400x600?${img},programming,code`
    ).then((x) => x.url);
  });
  onMount(() => {
    // @ts-ignore
    let element;
    let btn;
    element = document.getElementById(`modalPassword${path}`);
    btn = document.getElementById(`modalPassword${path}-btn`);
    // @ts-ignore
    btn.addEventListener("click", () => {
      if (browser) {
        if (localStorage.getItem("password") === $passwordConfirm) {
          goto(`${base}/course/${path}`);
        } else {
          // @ts-ignore
          element.showModal();
        }
      }
    });
  });
</script>

<div
  class="card card-compact w-96 h-64 lg:h-96 bg-base-100 shadow-xl border border-base-content"
>
  <figure>
    {#if dataImg === ""}
      <div class="skeleton w-full h-36"></div>
    {:else}
      <img src={dataImg} alt={title} class="w-full" />
    {/if}
  </figure>
  <div class="card-body items-center lg:items-start">
    {#if dataImg === ""}
      <div class="skeleton w-64 h-4"></div>
      <div class="skeleton w-full h-3 my-3"></div>
    {:else}
      <h2 class="card-title">{title}</h2>
      <p>{details}</p>
    {/if}

    <a class="btn btn-primary btn-sm w-full" id="modalPassword{path}-btn"
      >เข้าเรียน</a
    >
  </div>
</div>
<ModalPassword
  idModal="modalPassword{path}"
  passwordCheck={password}
  pathLink={path}
/>
