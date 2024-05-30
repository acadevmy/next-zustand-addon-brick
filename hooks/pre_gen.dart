import 'dart:io';

import 'package:mason/mason.dart';

Future<void> run(HookContext context) async {
  await runPnpm(context: context);
}

Future<void> runPnpm({
  required HookContext context,
}) async {
  context.logger.info('📦 Installing Zustand');
  await Process.run(
    'pnpm',
    ['i', 'zustand'],
  );
  context.logger.success('📦 Zustand installed successfully 🚀');
}
