## Commands Overview

These are useful commands for working with different runtimes (Node.js, and Deno) and managing Deno's caching, modules, and directories.

1. **Benchmark runtimes:**

   ```bash
   hyperfine "node bench.js" "deno run bench.js" --warmup=100 -i
   ```

   This command benchmarks the performance of running the `index.js` file using Node.js, and Deno. The `--warmup=100` flag ensures that each command is warmed up 100 times before measurement, and `-i` runs the benchmarking interactively.

2. **Deno info command:**

   ```bash
   deno info "https://docs.deno.com/examples/hello-world.ts"
   ```

   This fetches and provides information about the `hello-world.ts` file from the given URL, including its dependencies and module tree.

3. **Deno run with cache reload:**

   ```bash
   deno run --reload main.ts
   ```

   This runs the `main.ts` file while forcing a cache reload of the modules to ensure the latest versions are used.

4. **Open Deno's cache:**

   ```bash
   open ~/Library/Caches/deno/
   ```

   Opens the default cache directory on macOS where Deno stores its downloaded modules and files.

5. **Create a new Deno directory:**

   ```bash
   mkdir deno_dir
   ```

   Creates a new directory named `deno_dir` where you can specify a custom cache location for Deno.

6. **Set a custom Deno directory:**

   ```bash
   export DENO_DIR=./deno_dir/
   ```

   This exports the `DENO_DIR` environment variable, directing Deno to use the newly created `deno_dir` as its cache.

7. **Cache specific files:**

   ```bash
   deno cache main.ts
   ```

   Caches the dependencies of the `main.ts` file for future use, allowing faster execution as it doesn’t have to be downloaded each time.

8. **Add a module with Deno:**

   ```bash
   deno add jsr/......
   ```

   Adds a specific JavaScript or TypeScript module, using Deno's built-in package management capabilities (the full path should replace the `jsr/......` part).

9. **Use custom Deno cache directory in commands:**

   ```bash
   $DENO_DIR
   DENO_DIR=./deno_dir/ deno main.ts
   ```

   The first command shows the current value of `DENO_DIR`, and the second command runs the `main.ts` file using the `deno_dir` as the custom cache directory.

10. **To install Deno Jupyter, run the following command:**

```bash
deno jupyter --unstable --install
```

11. **Upgrade to Deno 2.0 Release Candidate:**

```bash
deno upgrade
deno upgrade rc
```

## References

- **[JSR Standard Library](https://jsr.io/@std)**: An evolving JavaScript/TypeScript standard library repository.
- **[Deno Third-Party Modules](https://deno.land/x)**: Official repository for third-party Deno modules.
- **[Deno Documentation](https://docs.deno.com/runtime/fundamentals/typescript/)**: Deno documentation on TypeScript support and runtime fundamentals.
