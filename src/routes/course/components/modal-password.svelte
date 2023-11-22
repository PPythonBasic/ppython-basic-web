<script>
  import { base } from "$app/paths";
  export let idModal = "my_modal_1";
  export let passwordCheck = "ppython-basic23";
  export let pathLink = "python-basic";
  let passwordInput = "";
  // @ts-ignore
  let errorPassword;

  const checkPassword = () => {
    if (passwordInput === passwordCheck) {
      localStorage.setItem("password", passwordCheck);
      window.location.href = `${base}/course/${pathLink}`;
    } else {
      // @ts-ignore
      errorPassword.style.display = "block";
    }
  };
</script>

<dialog id={idModal} class="modal">
  <div class="modal-box">
    <div class="flex justify-between">
      <h3 class="font-bold text-lg">กรอกรหัสผ่าน</h3>
      <form method="dialog">
        <button class="btn btn-sm">X</button>
      </form>
    </div>
    <div class="flex flex-col gap-4">
      <input
        type="password"
        class="input input-bordered w-full mt-2"
        bind:value={passwordInput}
      />
      <div
        role="alert"
        class="alert alert-error h-sm rounded-md"
        style="display:none"
        bind:this={errorPassword}
      >
        <span>รหัสผ่านไม่ถูกต้อง</span>
      </div>
    </div>
    <div class="modal-action">
      <button class="btn btn-primary w-full" on:click={() => checkPassword()}
        >ยืนยันรหัสผ่าน</button
      >
    </div>
  </div>
</dialog>
