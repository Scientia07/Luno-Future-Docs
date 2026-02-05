#!/bin/bash
#
# ==============================================================================
# FILE METADATA
# ==============================================================================
# filename:       setup.sh
# created:        2026-01-27
# updated:        2026-01-27
# version:        1.0.0
# status:         active
# description:    Launch the Animation Lab Setup Server
# ==============================================================================
#

set -e

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
SERVER_DIR="$SCRIPT_DIR/setup-server"

echo ""
echo "╔══════════════════════════════════════════════════════════╗"
echo "║           Animation Lab Setup Server                      ║"
echo "╚══════════════════════════════════════════════════════════╝"
echo ""

# Check if Node.js is installed
if ! command -v node &> /dev/null; then
    echo "❌ Node.js is not installed!"
    echo "   Please install Node.js 18+ first:"
    echo "   https://nodejs.org/"
    exit 1
fi

echo "✓ Node.js found: $(node --version)"

# Install server dependencies if needed
if [ ! -d "$SERVER_DIR/node_modules" ]; then
    echo ""
    echo "📦 Installing server dependencies..."
    cd "$SERVER_DIR"
    npm install
    echo "✓ Dependencies installed"
fi

echo ""
echo "🚀 Starting setup server..."
echo ""

cd "$SERVER_DIR"
node server.js
